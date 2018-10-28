import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineListAltElement
 * @class IconBaselineListAltElement
 * @extends {AoflElement}
 */
class IconBaselineListAltElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineListAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-list-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineListAltElement.is, IconBaselineListAltElement);

export default IconBaselineListAltElement;
