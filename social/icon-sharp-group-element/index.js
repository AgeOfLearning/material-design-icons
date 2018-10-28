import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGroupElement
 * @class IconSharpGroupElement
 * @extends {AoflElement}
 */
class IconSharpGroupElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGroupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-group';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGroupElement.is, IconSharpGroupElement);

export default IconSharpGroupElement;
