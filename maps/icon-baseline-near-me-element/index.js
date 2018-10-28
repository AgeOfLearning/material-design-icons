import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNearMeElement
 * @class IconBaselineNearMeElement
 * @extends {AoflElement}
 */
class IconBaselineNearMeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNearMeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-near-me';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNearMeElement.is, IconBaselineNearMeElement);

export default IconBaselineNearMeElement;
