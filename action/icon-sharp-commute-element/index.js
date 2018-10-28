import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCommuteElement
 * @class IconSharpCommuteElement
 * @extends {AoflElement}
 */
class IconSharpCommuteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCommuteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-commute';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCommuteElement.is, IconSharpCommuteElement);

export default IconSharpCommuteElement;
