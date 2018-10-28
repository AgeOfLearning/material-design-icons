import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNavigationElement
 * @class IconRoundNavigationElement
 * @extends {AoflElement}
 */
class IconRoundNavigationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNavigationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-navigation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNavigationElement.is, IconRoundNavigationElement);

export default IconRoundNavigationElement;
