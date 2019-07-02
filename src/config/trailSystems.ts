export interface TrailSystemConfig {
    key: string;
    name: string;
    url: string;
    trailCount: number;
}

const trailSystems: TrailSystemConfig[] = [
    {
        key: 'brownCounty',
        name: 'Brown County State Park',
        url:
            'https://www.mtbproject.com/widget/conditions?v=3&x=-9598169&y=4746949&z=9&height=2000',
        trailCount: 7
    },
    {
        key: 'ferdinanaForest',
        name: 'Ferdinand Forest',
        url:
            'https://www.mtbproject.com/widget/conditions?v=3&x=-9660050&y=4617550&z=9&height=2000',
        trailCount: 2
    },
    {
        key: 'ftHarrison',
        name: 'Ft Harrison',
        url:
            'https://www.mtbproject.com/widget/conditions?v=3&x=-9575549&y=4846527&z=9&height=2000',
        trailCount: 4
    },
    {
        key: 'griffin',
        name: 'Griffin Bike Park',
        url:
            'https://www.mtbproject.com/widget/conditions?v=3&x=-9724685&y=4770264&z=10&height=2000',
        trailCount: 12
    },
    {
        key: 'obannon',
        name: "O'Bannon Woods State Park",
        url:
            'https://www.mtbproject.com/widget/conditions?v=3&x=-9604309&y=4606015&z=8&height=2000',
        trailCount: 7
    },
    {
        key: 'rangeline',
        name: 'Rangeline',
        url:
            'https://www.mtbproject.com/widget/conditions?v=3&x=-9533133&y=4880307&z=11&height=2000',
        trailCount: 7
    },
    {
        key: 'southwestway',
        name: 'Southwestway',
        url:
            'https://www.mtbproject.com/widget/conditions?v=3&x=-9601495&y=4815442&z=8&height=2000',
        trailCount: 12
    },
    {
        key: 'townRun',
        name: 'Town Run',
        url:
            'https://www.mtbproject.com/widget/conditions?v=3&x=-9582821&y=4853948&z=10&height=2000',
        trailCount: 1
    },
    {
        key: 'versailles',
        name: 'Versailles',
        url:
            'https://www.mtbproject.com/widget/conditions?v=3&x=-9488144&y=4734869&z=10&height=2000',
        trailCount: 7
    },
    {
        key: 'westwood',
        name: 'Westwood Park',
        url:
            'https://www.mtbproject.com/widget/conditions?v=3&x=-9509240&y=4851951&z=9&height=2000',
        trailCount: 1
    },
    {
        key: 'yellowwood',
        name: 'Yellowwood State Park',
        url:
            'https://www.mtbproject.com/widget/conditions?v=3&x=-9606851&y=4739751&z=9&height=2000',
        trailCount: 3
    }
];

export default trailSystems;
