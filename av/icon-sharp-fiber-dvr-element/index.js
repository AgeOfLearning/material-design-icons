import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFiberDvrElement
 * @class IconSharpFiberDvrElement
 * @extends {AoflElement}
 */
class IconSharpFiberDvrElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFiberDvrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fiber-dvr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFiberDvrElement.is, IconSharpFiberDvrElement);

export default IconSharpFiberDvrElement;
