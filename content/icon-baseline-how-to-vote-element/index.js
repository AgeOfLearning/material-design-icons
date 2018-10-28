import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHowToVoteElement
 * @class IconBaselineHowToVoteElement
 * @extends {AoflElement}
 */
class IconBaselineHowToVoteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHowToVoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-how-to-vote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHowToVoteElement.is, IconBaselineHowToVoteElement);

export default IconBaselineHowToVoteElement;
