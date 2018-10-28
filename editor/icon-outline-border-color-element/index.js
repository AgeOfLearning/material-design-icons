import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderColorElement
 * @class IconOutlineBorderColorElement
 * @extends {AoflElement}
 */
class IconOutlineBorderColorElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderColorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-color';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderColorElement.is, IconOutlineBorderColorElement);

export default IconOutlineBorderColorElement;
