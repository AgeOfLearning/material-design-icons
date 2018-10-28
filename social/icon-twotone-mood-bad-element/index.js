import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMoodBadElement
 * @class IconTwotoneMoodBadElement
 * @extends {AoflElement}
 */
class IconTwotoneMoodBadElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMoodBadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mood-bad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMoodBadElement.is, IconTwotoneMoodBadElement);

export default IconTwotoneMoodBadElement;
