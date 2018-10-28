import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMenuElement
 * @class IconBaselineMenuElement
 * @extends {AoflElement}
 */
class IconBaselineMenuElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMenuElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-menu';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMenuElement.is, IconBaselineMenuElement);

export default IconBaselineMenuElement;
