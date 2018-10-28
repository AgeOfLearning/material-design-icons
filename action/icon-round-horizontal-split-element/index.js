import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHorizontalSplitElement
 * @class IconRoundHorizontalSplitElement
 * @extends {AoflElement}
 */
class IconRoundHorizontalSplitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHorizontalSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-horizontal-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHorizontalSplitElement.is, IconRoundHorizontalSplitElement);

export default IconRoundHorizontalSplitElement;
