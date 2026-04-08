(function() {
    const SKIP_SECONDS = 6;

    const playerState = {
        initialized: false,
        playbackSpeed: 1.0,
        isLooping: false
    };

    const playIcon = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    const pauseIcon = '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';

    function getRefs() {
        return {
            audio: document.getElementById('audioElement'),
            playBtn: document.getElementById('playBtn'),
            prevBtn: document.getElementById('prevBtn'),
            nextBtn: document.getElementById('nextBtn'),
            rewindBtn: document.getElementById('rewindBtn'),
            forwardBtn: document.getElementById('forwardBtn'),
            loopBtn: document.getElementById('loopBtn'),
            speedBtn: document.getElementById('speedBtn'),
            trackTitle: document.getElementById('trackTitle'),
            trackSubtitle: document.getElementById('trackSubtitle'),
            progressContainer: document.getElementById('progressContainer'),
            progressBar: document.getElementById('progressBar'),
            timeCurrent: document.getElementById('timeCurrent'),
            timeDurationDesktop: document.getElementById('timeDurationDesktop'),
            timeDurationMobile: document.getElementById('timeDurationMobile')
        };
    }

    function formatTime(seconds) {
        if (!Number.isFinite(seconds) || seconds < 0) {
            return '0:00';
        }

        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec.toString().padStart(2, '0')}`;
    }

    function setPlayButton(refs, isPlaying) {
        if (refs.playBtn) {
            refs.playBtn.innerHTML = isPlaying ? pauseIcon : playIcon;
        }
    }

    function syncLoopState(refs) {
        if (!refs.audio || !refs.loopBtn) {
            return;
        }

        refs.audio.loop = playerState.isLooping;
        refs.loopBtn.classList.toggle('active', playerState.isLooping);
    }

    function syncSpeedState(refs) {
        if (!refs.audio || !refs.speedBtn) {
            return;
        }

        refs.audio.playbackRate = playerState.playbackSpeed;
        refs.speedBtn.textContent = playerState.playbackSpeed === 1.0 ? '1.0x' : '0.75x';
    }

    function resetPlayerUi(refs) {
        if (refs.progressBar) {
            refs.progressBar.style.width = '0%';
        }

        if (refs.timeCurrent) {
            refs.timeCurrent.textContent = '0:00';
        }

        if (refs.timeDurationDesktop) {
            refs.timeDurationDesktop.textContent = '0:00';
        }

        if (refs.timeDurationMobile) {
            refs.timeDurationMobile.textContent = '-0:00';
        }

        setPlayButton(refs, false);
    }

    function updateTimeDisplay(refs) {
        if (!refs.audio) {
            return;
        }

        const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
        const currentTime = Number.isFinite(refs.audio.currentTime) ? refs.audio.currentTime : 0;
        const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

        if (refs.progressBar) {
            refs.progressBar.style.width = `${progress}%`;
        }

        if (refs.timeCurrent) {
            refs.timeCurrent.textContent = formatTime(currentTime);
        }

        if (refs.timeDurationDesktop) {
            refs.timeDurationDesktop.textContent = formatTime(duration);
        }

        if (refs.timeDurationMobile) {
            refs.timeDurationMobile.textContent = `-${formatTime(Math.max(0, duration - currentTime))}`;
        }
    }

    function normalizeAudioSrc(audioSrc) {
        if (!audioSrc) {
            return '';
        }

        return new URL(audioSrc, document.baseURI).href;
    }

    window.setupListeningPlayer = function setupListeningPlayer(options) {
        const refs = getRefs();
        const subtitle = options && typeof options.subtitle === 'string'
            ? options.subtitle
            : document.title.replace(/\s*\((N1|N2|N3)\)\s*$/, '');

        if (!refs.audio) {
            return;
        }

        if (refs.trackSubtitle) {
            refs.trackSubtitle.textContent = subtitle;
        }

        if (playerState.initialized) {
            syncLoopState(refs);
            syncSpeedState(refs);
            return;
        }

        playerState.initialized = true;
        resetPlayerUi(refs);
        syncLoopState(refs);
        syncSpeedState(refs);

        if (refs.playBtn) {
            refs.playBtn.addEventListener('click', () => {
                if (!refs.audio.getAttribute('src')) {
                    return;
                }

                if (refs.audio.paused) {
                    const playPromise = refs.audio.play();
                    if (playPromise && typeof playPromise.then === 'function') {
                        playPromise.catch((error) => {
                            console.warn('音频播放失败，找不到相关文件源或不支持的格式:', error);
                            setPlayButton(refs, false);
                        });
                    }
                } else {
                    refs.audio.pause();
                }
            });
        }

        refs.audio.addEventListener('play', () => {
            setPlayButton(refs, true);
        });

        refs.audio.addEventListener('pause', () => {
            setPlayButton(refs, false);
        });

        refs.audio.addEventListener('timeupdate', () => {
            updateTimeDisplay(refs);
        });

        if (refs.progressContainer) {
            refs.progressContainer.addEventListener('click', (event) => {
                const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
                if (duration <= 0) {
                    return;
                }

                const rect = refs.progressContainer.getBoundingClientRect();
                const offset = Math.min(Math.max(0, event.clientX - rect.left), rect.width);
                refs.audio.currentTime = (offset / rect.width) * duration;
            });
        }

        refs.audio.addEventListener('loadedmetadata', () => {
            if (refs.timeCurrent) {
                refs.timeCurrent.textContent = '0:00';
            }

            const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
            if (refs.timeDurationDesktop) {
                refs.timeDurationDesktop.textContent = formatTime(duration);
            }

            if (refs.timeDurationMobile) {
                refs.timeDurationMobile.textContent = `-${formatTime(duration)}`;
            }

            syncSpeedState(refs);
            syncLoopState(refs);
        });

        refs.audio.addEventListener('ended', () => {
            if (!refs.audio.loop) {
                setPlayButton(refs, false);
                if (refs.progressBar) {
                    refs.progressBar.style.width = '0%';
                }
            }
        });

        if (refs.rewindBtn) {
            refs.rewindBtn.addEventListener('click', () => {
                refs.audio.currentTime = Math.max(0, refs.audio.currentTime - SKIP_SECONDS);
            });
        }

        if (refs.forwardBtn) {
            refs.forwardBtn.addEventListener('click', () => {
                const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
                refs.audio.currentTime = Math.min(duration, refs.audio.currentTime + SKIP_SECONDS);
            });
        }

        if (refs.loopBtn) {
            refs.loopBtn.addEventListener('click', () => {
                playerState.isLooping = !playerState.isLooping;
                syncLoopState(refs);
            });
        }

        if (refs.speedBtn) {
            refs.speedBtn.addEventListener('click', () => {
                playerState.playbackSpeed = playerState.playbackSpeed === 1.0 ? 0.75 : 1.0;
                syncSpeedState(refs);
            });
        }
    };

    window.updateListeningPlayer = function updateListeningPlayer(config) {
        const refs = getRefs();
        if (!refs.audio) {
            return;
        }

        const title = config && config.title ? config.title : '';
        const audioSrc = config && typeof config.audioSrc === 'string' ? config.audioSrc : '';
        const hasPrev = !!(config && config.hasPrev);
        const hasNext = !!(config && config.hasNext);

        if (refs.trackTitle) {
            refs.trackTitle.textContent = title;
        }

        if (refs.prevBtn) {
            refs.prevBtn.disabled = !hasPrev;
        }

        if (refs.nextBtn) {
            refs.nextBtn.disabled = !hasNext;
        }

        const currentSrc = normalizeAudioSrc(refs.audio.getAttribute('src'));
        const nextSrc = normalizeAudioSrc(audioSrc);

        if (!nextSrc) {
            refs.audio.pause();
            refs.audio.removeAttribute('src');
            refs.audio.load();
            resetPlayerUi(refs);
            syncLoopState(refs);
            syncSpeedState(refs);
            return;
        }

        if (currentSrc !== nextSrc) {
            refs.audio.pause();
            refs.audio.src = audioSrc;
            refs.audio.currentTime = 0;
            refs.audio.load();
            resetPlayerUi(refs);
        }

        syncLoopState(refs);
        syncSpeedState(refs);
    };
})();
