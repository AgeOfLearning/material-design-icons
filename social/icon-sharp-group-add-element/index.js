import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGroupAddElement
 * @class IconSharpGroupAddElement
 * @extends {AoflElement}
 */
class IconSharpGroupAddElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGroupAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-group-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGroupAddElement.is, IconSharpGroupAddElement);

export default IconSharpGroupAddElement;
