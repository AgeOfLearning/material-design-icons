import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundListElement
 * @class IconRoundListElement
 * @extends {AoflElement}
 */
class IconRoundListElement extends AoflElement {
  /**
   * Creates an instance of IconRoundListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundListElement.is, IconRoundListElement);

export default IconRoundListElement;
