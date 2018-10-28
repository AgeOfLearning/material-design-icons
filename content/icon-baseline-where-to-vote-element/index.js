import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWhereToVoteElement
 * @class IconBaselineWhereToVoteElement
 * @extends {AoflElement}
 */
class IconBaselineWhereToVoteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWhereToVoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-where-to-vote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWhereToVoteElement.is, IconBaselineWhereToVoteElement);

export default IconBaselineWhereToVoteElement;
