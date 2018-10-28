import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalDiningElement
 * @class IconSharpLocalDiningElement
 * @extends {AoflElement}
 */
class IconSharpLocalDiningElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalDiningElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-dining';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalDiningElement.is, IconSharpLocalDiningElement);

export default IconSharpLocalDiningElement;
