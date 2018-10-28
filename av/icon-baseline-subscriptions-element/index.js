import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSubscriptionsElement
 * @class IconBaselineSubscriptionsElement
 * @extends {AoflElement}
 */
class IconBaselineSubscriptionsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSubscriptionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-subscriptions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSubscriptionsElement.is, IconBaselineSubscriptionsElement);

export default IconBaselineSubscriptionsElement;
