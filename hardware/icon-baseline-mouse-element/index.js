import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMouseElement
 * @class IconBaselineMouseElement
 * @extends {AoflElement}
 */
class IconBaselineMouseElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMouseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mouse';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMouseElement.is, IconBaselineMouseElement);

export default IconBaselineMouseElement;
