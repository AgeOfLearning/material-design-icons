import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilter9PlusElement
 * @class IconRoundFilter9PlusElement
 * @extends {AoflElement}
 */
class IconRoundFilter9PlusElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFilter9PlusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-9-plus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilter9PlusElement.is, IconRoundFilter9PlusElement);

export default IconRoundFilter9PlusElement;
