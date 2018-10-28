import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSortElement
 * @class IconRoundSortElement
 * @extends {AoflElement}
 */
class IconRoundSortElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSortElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sort';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSortElement.is, IconRoundSortElement);

export default IconRoundSortElement;
