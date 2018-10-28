import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMoodBadElement
 * @class IconSharpMoodBadElement
 * @extends {AoflElement}
 */
class IconSharpMoodBadElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMoodBadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mood-bad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMoodBadElement.is, IconSharpMoodBadElement);

export default IconSharpMoodBadElement;
