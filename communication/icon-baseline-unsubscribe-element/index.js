import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineUnsubscribeElement
 * @class IconBaselineUnsubscribeElement
 * @extends {AoflElement}
 */
class IconBaselineUnsubscribeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineUnsubscribeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-unsubscribe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineUnsubscribeElement.is, IconBaselineUnsubscribeElement);

export default IconBaselineUnsubscribeElement;
