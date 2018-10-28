import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTurnedInNotElement
 * @class IconTwotoneTurnedInNotElement
 * @extends {AoflElement}
 */
class IconTwotoneTurnedInNotElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTurnedInNotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-turned-in-not';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTurnedInNotElement.is, IconTwotoneTurnedInNotElement);

export default IconTwotoneTurnedInNotElement;
