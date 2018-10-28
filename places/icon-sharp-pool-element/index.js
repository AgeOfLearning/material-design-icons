import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPoolElement
 * @class IconSharpPoolElement
 * @extends {AoflElement}
 */
class IconSharpPoolElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPoolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pool';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPoolElement.is, IconSharpPoolElement);

export default IconSharpPoolElement;
