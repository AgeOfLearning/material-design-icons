import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStayPrimaryPortraitElement
 * @class IconBaselineStayPrimaryPortraitElement
 * @extends {AoflElement}
 */
class IconBaselineStayPrimaryPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStayPrimaryPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-stay-primary-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStayPrimaryPortraitElement.is, IconBaselineStayPrimaryPortraitElement);

export default IconBaselineStayPrimaryPortraitElement;
