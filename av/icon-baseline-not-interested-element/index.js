import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNotInterestedElement
 * @class IconBaselineNotInterestedElement
 * @extends {AoflElement}
 */
class IconBaselineNotInterestedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNotInterestedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-not-interested';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNotInterestedElement.is, IconBaselineNotInterestedElement);

export default IconBaselineNotInterestedElement;
