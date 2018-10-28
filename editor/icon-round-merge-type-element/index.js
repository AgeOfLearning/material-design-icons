import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMergeTypeElement
 * @class IconRoundMergeTypeElement
 * @extends {AoflElement}
 */
class IconRoundMergeTypeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMergeTypeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-merge-type';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMergeTypeElement.is, IconRoundMergeTypeElement);

export default IconRoundMergeTypeElement;
