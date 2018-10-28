import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTurnedInElement
 * @class IconTwotoneTurnedInElement
 * @extends {AoflElement}
 */
class IconTwotoneTurnedInElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTurnedInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-turned-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTurnedInElement.is, IconTwotoneTurnedInElement);

export default IconTwotoneTurnedInElement;
