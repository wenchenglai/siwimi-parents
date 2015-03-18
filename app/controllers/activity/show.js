import Ember from 'ember';
import ActivityDataMixin from '../../mixins/activity-data';

export default Ember.ObjectController.extend(ActivityDataMixin, {
    showEdit: function() {
        if (Ember.isEmpty(this.get('creator'))) {
            if (this.get('session').isAuthenticated) {
                return true;
            } else {
                return false;
            }
        } else {
            return this.get('creator').get('id') === this.get('session').get('id');
        }
    }.property('creator')
});
