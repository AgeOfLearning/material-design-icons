import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHdElement
 * @class IconBaselineHdElement
 * @extends {AoflElement}
 */
class IconBaselineHdElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHdElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-hd';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHdElement.is, IconBaselineHdElement);

export default IconBaselineHdElement;
