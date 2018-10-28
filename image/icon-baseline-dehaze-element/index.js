import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDehazeElement
 * @class IconBaselineDehazeElement
 * @extends {AoflElement}
 */
class IconBaselineDehazeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDehazeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-dehaze';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDehazeElement.is, IconBaselineDehazeElement);

export default IconBaselineDehazeElement;
