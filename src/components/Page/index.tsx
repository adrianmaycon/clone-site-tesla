import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container, Spacer } from './styles';
import UniqueOverlay from '../UniqueOverlay';

const Page: React.FC = () => {
  return (
    <Container>
        <ModelsWrapper>
            <div>
                {[
                    'Model 01',
                    'Model 02',
                    'Model 03',
                    'Model 04',
                    'Model 05',
                    'Model 06',
                ].map(modelName => 
                    <ModelSection
                        key={modelName}
                        className='colored'
                        modelName={modelName}
                        overlayNode={
                            <DefaultOverlayContent
                                label={modelName}
                                description='Order Online for Delivery'
                            />
                        }
                    />
                )}
            </div>

            <Spacer />

            <UniqueOverlay />
        </ModelsWrapper>
    </Container>
    );
}

export default Page;