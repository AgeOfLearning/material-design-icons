import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFiberNewElement
 * @class IconSharpFiberNewElement
 * @extends {AoflElement}
 */
class IconSharpFiberNewElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFiberNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fiber-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFiberNewElement.is, IconSharpFiberNewElement);

export default IconSharpFiberNewElement;
