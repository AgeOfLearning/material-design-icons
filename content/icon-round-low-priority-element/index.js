import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLowPriorityElement
 * @class IconRoundLowPriorityElement
 * @extends {AoflElement}
 */
class IconRoundLowPriorityElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLowPriorityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-low-priority';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLowPriorityElement.is, IconRoundLowPriorityElement);

export default IconRoundLowPriorityElement;
