import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundToysElement
 * @class IconRoundToysElement
 * @extends {AoflElement}
 */
class IconRoundToysElement extends AoflElement {
  /**
   * Creates an instance of IconRoundToysElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-toys';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundToysElement.is, IconRoundToysElement);

export default IconRoundToysElement;
