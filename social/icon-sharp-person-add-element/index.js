import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPersonAddElement
 * @class IconSharpPersonAddElement
 * @extends {AoflElement}
 */
class IconSharpPersonAddElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPersonAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-person-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPersonAddElement.is, IconSharpPersonAddElement);

export default IconSharpPersonAddElement;
