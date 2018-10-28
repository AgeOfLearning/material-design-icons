import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStraightenElement
 * @class IconTwotoneStraightenElement
 * @extends {AoflElement}
 */
class IconTwotoneStraightenElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStraightenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-straighten';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStraightenElement.is, IconTwotoneStraightenElement);

export default IconTwotoneStraightenElement;
