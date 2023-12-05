<template>
    <nav class="navbar navbar-light bg-light navbar-expand-sm mb-5">
        <div class="container-fluid">
            <router-link class="text-decoration-none" to="/">
                <img src="../../assets/logoForsvaret.png" width="45" alt="Logo til forsvaret norge">
                <span class="text-uppercase text-muted">Mønstring | Hæren</span>
            </router-link>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item hover-shadow"><router-link class="nav-link text-muted" to="/Soldiers">soldater</router-link></li>
                    <li class="nav-item"><router-link class="nav-link text-muted" to="/Vehicles">kjøretøy</router-link></li>
                    <li class="nav-item"><router-link class="nav-link text-muted" to="/Weapons">våpen</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>