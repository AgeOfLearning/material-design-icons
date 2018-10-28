import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSpaceBarElement
 * @class IconRoundSpaceBarElement
 * @extends {AoflElement}
 */
class IconRoundSpaceBarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSpaceBarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-space-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSpaceBarElement.is, IconRoundSpaceBarElement);

export default IconRoundSpaceBarElement;
