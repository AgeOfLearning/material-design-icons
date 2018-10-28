import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMoodBadElement
 * @class IconOutlineMoodBadElement
 * @extends {AoflElement}
 */
class IconOutlineMoodBadElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMoodBadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mood-bad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMoodBadElement.is, IconOutlineMoodBadElement);

export default IconOutlineMoodBadElement;
