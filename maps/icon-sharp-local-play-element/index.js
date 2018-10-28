import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalPlayElement
 * @class IconSharpLocalPlayElement
 * @extends {AoflElement}
 */
class IconSharpLocalPlayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalPlayElement.is, IconSharpLocalPlayElement);

export default IconSharpLocalPlayElement;
