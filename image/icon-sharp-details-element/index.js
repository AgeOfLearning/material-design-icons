import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDetailsElement
 * @class IconSharpDetailsElement
 * @extends {AoflElement}
 */
class IconSharpDetailsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDetailsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-details';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDetailsElement.is, IconSharpDetailsElement);

export default IconSharpDetailsElement;
