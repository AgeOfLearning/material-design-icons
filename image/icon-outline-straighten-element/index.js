import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStraightenElement
 * @class IconOutlineStraightenElement
 * @extends {AoflElement}
 */
class IconOutlineStraightenElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStraightenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-straighten';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStraightenElement.is, IconOutlineStraightenElement);

export default IconOutlineStraightenElement;
