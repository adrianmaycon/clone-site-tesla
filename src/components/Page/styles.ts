import styled from 'styled-components';

export const Container = styled.div`
    .colored {
        background-size: cover;
        background-position: center;
    }
    .colored:nth-child(1) {
        background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD');
    }
    .colored:nth-child(2) {
        background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70');
    }
    .colored:nth-child(3) {
        background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD');
    }
    .colored:nth-child(4) {
        background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-LHD');
    }
    .colored:nth-child(5) {
        background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D');
    }
    .colored:nth-child(6) {
        background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global?quality=auto-medium&format=auto');
    }
    .colored:nth-child(7) {
        background: #77e68c;
    }
`;

export const Spacer = styled.div`
    height: 15vh;
    background: rgb(2,0,36);
    background: linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(0,212,255,1) 100%);
`;