import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFastForwardElement
 * @class IconSharpFastForwardElement
 * @extends {AoflElement}
 */
class IconSharpFastForwardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFastForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fast-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFastForwardElement.is, IconSharpFastForwardElement);

export default IconSharpFastForwardElement;
