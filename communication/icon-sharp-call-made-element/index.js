import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCallMadeElement
 * @class IconSharpCallMadeElement
 * @extends {AoflElement}
 */
class IconSharpCallMadeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCallMadeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-call-made';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCallMadeElement.is, IconSharpCallMadeElement);

export default IconSharpCallMadeElement;
