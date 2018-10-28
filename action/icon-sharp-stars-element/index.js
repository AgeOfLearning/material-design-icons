import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStarsElement
 * @class IconSharpStarsElement
 * @extends {AoflElement}
 */
class IconSharpStarsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStarsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-stars';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStarsElement.is, IconSharpStarsElement);

export default IconSharpStarsElement;
