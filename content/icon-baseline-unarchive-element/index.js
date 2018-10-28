import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineUnarchiveElement
 * @class IconBaselineUnarchiveElement
 * @extends {AoflElement}
 */
class IconBaselineUnarchiveElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineUnarchiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-unarchive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineUnarchiveElement.is, IconBaselineUnarchiveElement);

export default IconBaselineUnarchiveElement;
