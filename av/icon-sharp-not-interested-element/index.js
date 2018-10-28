import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNotInterestedElement
 * @class IconSharpNotInterestedElement
 * @extends {AoflElement}
 */
class IconSharpNotInterestedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNotInterestedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-not-interested';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNotInterestedElement.is, IconSharpNotInterestedElement);

export default IconSharpNotInterestedElement;
