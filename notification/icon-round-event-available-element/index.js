import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEventAvailableElement
 * @class IconRoundEventAvailableElement
 * @extends {AoflElement}
 */
class IconRoundEventAvailableElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEventAvailableElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-event-available';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEventAvailableElement.is, IconRoundEventAvailableElement);

export default IconRoundEventAvailableElement;
