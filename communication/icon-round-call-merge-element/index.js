import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCallMergeElement
 * @class IconRoundCallMergeElement
 * @extends {AoflElement}
 */
class IconRoundCallMergeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCallMergeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-call-merge';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCallMergeElement.is, IconRoundCallMergeElement);

export default IconRoundCallMergeElement;
