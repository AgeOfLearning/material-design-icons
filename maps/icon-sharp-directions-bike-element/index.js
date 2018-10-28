import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDirectionsBikeElement
 * @class IconSharpDirectionsBikeElement
 * @extends {AoflElement}
 */
class IconSharpDirectionsBikeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDirectionsBikeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-directions-bike';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDirectionsBikeElement.is, IconSharpDirectionsBikeElement);

export default IconSharpDirectionsBikeElement;
